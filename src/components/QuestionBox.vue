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
			@click="selectedAnswer(index)"
			:class="[selectedIndex === index ? 'selected':'']">
				
				<b-list-group-item>
					{{choice}}
				</b-list-group-item>
				
			</b-list-group>

			<b-button variant="primary" href="#">Submit</b-button>
			<b-button @click="nextQuestion" variant="success" href="#">Next</b-button>
		</b-jumbotron>
	</div>  
</template>

<script>
export default {
	props: {
		currentQuestion: Object,
		nextQuestion: Function,
	}, 

	data() {
		return {
			selectedChoice: null
		}
	},
	
	
	methods: {
		selectedAnswer(index){
			this.selectedChoice = index
			// console.log(this.selectedChoice)
		}
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
		background: #a59f9f3b
	}

	.correct {
		background: #61dd5d
	}

	.incorrect {
		background: #cc3d3d
	}


</style>
