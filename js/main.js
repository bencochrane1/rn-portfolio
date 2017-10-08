import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
	{
		'title': "work example code",
		'image': {
			'desc': "work example code",
			'src': "images/example1.png",
			'comment': "code stuf"
		}
	},
	{
		'title': "work example colour",
		'image': {
			'desc': "work example colour",
			'src': "images/example2.png",
			'comment': "colour stuf"
		}
	},
	{
		'title': "work example cat",
		'image': {
			'desc': "work example cat",
			'src': "images/example3.png",
			'comment': "cat stuf"
		}
	}		
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));

