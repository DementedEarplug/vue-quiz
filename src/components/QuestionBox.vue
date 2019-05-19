<template>
	<div class="question-box">
		<b-jumbotron >

			<template slot="lead">
				<!-- currentQuestion is imported form parent component -->
				{{currentQuestion.question}}
			</template>

			<hr class="my-4">

			<b-list-group>
				
				<!-- Applies the css of a selected item -->
				<b-list-group-item 
				v-for="(choice, index) in shuffledChoices" 
				:key="index"
				@click.prevent="selectedAnswer(index)"
				:class="answerClass(index)">
					{{choice}}
				</b-list-group-item>
				
			</b-list-group>

			<b-button variant="primary"
			@click="submitAnswer"
			:disabled="selectedChoice === null || answered">
				Submit
			</b-button>

			<b-button @click="nextQuestion" variant="success" href="#">Next</b-button>
		</b-jumbotron>
	</div>  
</template>

<script>
import _ from 'lodash'

export default {
	props: {
		currentQuestion: Object,
		nextQuestion: Function,
		increment: Function,
	}, 

	data() {
		return {
			selectedChoice: null,
			shuffledChoices: [],
			correctAnswer: null,
			answered : false,
		}
	},

	computed: {
		choices(){
			// make a list with the inccorrect answers and append the correct question
			let choices = [...this.currentQuestion.incorrect_answers]
			choices.push(this.currentQuestion.correct_answer)
			return choices
		}
	},
	
	watch: {
		currentQuestion: {
			immediate:true,
			// Has same name of current question pro, but why?
			handler(){
				this.selectedChoice = null
				this.shuffleChoices()
				this.answered = false
			}
		}
	},
	
	methods: {
		selectedAnswer(index){
			this.selectedChoice = index
			// console.log(this.selectedChoice)
		},
		shuffleChoices(){
			let choices = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer]
			this.shuffledChoices = _.shuffle(choices)
			this.correctAnswer = this.shuffledChoices.indexOf(this.currentQuestion.correct_answer)
			return this.shuffledChoices
		},
		answerClass(index){
			let answerClass = ''
			if(!this.answered && this.selectedChoice === index){ answerClass ='selected'}
			else if(this.answered && this.correctAnswer === index){answerClass = 'correct'}
			else if(this.answered && this.selectedChoice===index && this.correctAnswer !== index) {answerClass = 'incorrect'}
			return answerClass
		},
		submitAnswer(){
			let isCorrect = false

			if(this.selectedChoice === this.correctAnswer)
			{
				isCorrect = true
			}
			this.answered = true
			this.increment(isCorrect)
		},
	},
	
	
	
}
</script>

<style>
	.list-group{
		margin-bottom: 0.1rem;
	
	}

	.list-group-item:hover{
		background: #a59f9f3b
	
	}

	.btn{
		margin: 1rem 1rem;
		
	}

	.selected {
		background: #ccc
	}

	.correct {
		background: #61dd5d
	}

	.incorrect {
		background: #f13838d2
	}


</style>
