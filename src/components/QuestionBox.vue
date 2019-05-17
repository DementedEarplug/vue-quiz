<template>
	<div class="question-box">
		<b-jumbotron >

			<template slot="lead">
				<!-- currentQuestion is imported form parent component -->
				{{currentQuestion.question}}
			</template>

			<hr class="my-4">

			<b-list-group 
			v-for="(choice, index) in choices" 
			:key="index"
			@click="selectedAnswer(index)">
				
				<b-list-group-item :class="[selectedChoice === index ? 'selected':'']">
					{{choice}}
				</b-list-group-item>
				
			</b-list-group>

			<b-button variant="primary" href="#">Submit</b-button>
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
	}, 

	data() {
		return {
			selectedChoice: null,
			shuffledChoices: []
		}
	},
	
	watch: {
		// Has same name of current question pro, bu why?
		currentQuestion(){
			this.selectedChoice = null
			this.shuffleChoices()
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
			console.log(this.shuffledChoices);
			

		},
	},

	computed: {
		choices(){
			// make a list with the inccorrect answers and append the correct question
			let choices = [...this.currentQuestion.incorrect_answers]
			choices.push(this.currentQuestion.correct_answer)
			return choices
		}
	}
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
		background: #cc3d3d
	}


</style>
