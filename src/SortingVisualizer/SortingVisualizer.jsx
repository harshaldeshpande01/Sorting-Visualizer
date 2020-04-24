import React from 'react';
import { getMergeSortAnimations } from '../sortingAlgorithms/sortingAlgorithms.js';
import { getInsertionSortAnimations } from '../sortingAlgorithms/sortingAlgorithms.js';
import { getbubbleSortAnimations } from '../sortingAlgorithms/sortingAlgorithms.js';
import { getCountingSortAnimations } from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 333;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';


export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }


  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(10, 650));
    }
    //resetColor();
    this.setState({ array });
  }

  mergeSort() {
    let animationSpeed = ANIMATION_SPEED_MS;
    document.getElementById('gb').setAttribute("disabled", "disabled");
    document.getElementById('mb').setAttribute("disabled", "disabled");
    document.getElementById('qb').setAttribute("disabled", "disabled");
    document.getElementById('hb').setAttribute("disabled", "disabled");
    document.getElementById('bb').setAttribute("disabled", "disabled");
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
      setTimeout(() => {
        document.getElementById('gb').removeAttribute("disabled");
        document.getElementById('mb').removeAttribute("disabled");
        document.getElementById('qb').removeAttribute("disabled");
        document.getElementById('hb').removeAttribute("disabled");
        document.getElementById('bb').removeAttribute("disabled");
      }, animations.length * animationSpeed)
    }
  }

  countingSort() {
    const animationSpeed = ANIMATION_SPEED_MS * 10;
    document.getElementById('gb').setAttribute("disabled", "disabled");
    document.getElementById('mb').setAttribute("disabled", "disabled");
    document.getElementById('qb').setAttribute("disabled", "disabled");
    document.getElementById('hb').setAttribute("disabled", "disabled");
    document.getElementById('bb').setAttribute("disabled", "disabled");
    const animations = getCountingSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = animations[i][1];
      if (isColorChange < 0) {
        const [barOneIdx, x] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const color = isColorChange === -1 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
        }, i * animationSpeed);
      }
      else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          //barOneStyle.backgroundColor = "lightblue";
        }, i * animationSpeed);
      }
      setTimeout(() => {
        document.getElementById('gb').removeAttribute("disabled");
        document.getElementById('mb').removeAttribute("disabled");
        document.getElementById('qb').removeAttribute("disabled");
        document.getElementById('hb').removeAttribute("disabled");
        document.getElementById('bb').removeAttribute("disabled");
      }, animations.length * animationSpeed);
    }
  }

  insertionSort() {
    const animationSpeed = ANIMATION_SPEED_MS * 0.1;
    document.getElementById('gb').setAttribute("disabled", "disabled");
    document.getElementById('mb').setAttribute("disabled", "disabled");
    document.getElementById('qb').setAttribute("disabled", "disabled");
    document.getElementById('hb').setAttribute("disabled", "disabled");
    document.getElementById('bb').setAttribute("disabled", "disabled");
    const animations = getInsertionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = animations[i][1];
      if (isColorChange < 0) {
        const [barOneIdx, x] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const color = isColorChange === -1 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
        }, i * animationSpeed);
      }
      else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
      setTimeout(() => {
        document.getElementById('gb').removeAttribute("disabled");
        document.getElementById('mb').removeAttribute("disabled");
        document.getElementById('qb').removeAttribute("disabled");
        document.getElementById('hb').removeAttribute("disabled");
        document.getElementById('bb').removeAttribute("disabled");
      }, animations.length * animationSpeed);
    }

  }

  BubbleSort() {
    const animationSpeed = ANIMATION_SPEED_MS * 0.1;
    document.getElementById('gb').setAttribute("disabled", "disabled");
    document.getElementById('mb').setAttribute("disabled", "disabled");
    document.getElementById('qb').setAttribute("disabled", "disabled");
    document.getElementById('hb').setAttribute("disabled", "disabled");
    document.getElementById('bb').setAttribute("disabled", "disabled");
    const animations = getbubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = animations[i][2];
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
      setTimeout(() => {
        document.getElementById('gb').removeAttribute("disabled");
        document.getElementById('mb').removeAttribute("disabled");
        document.getElementById('qb').removeAttribute("disabled");
        document.getElementById('hb').removeAttribute("disabled");
        document.getElementById('bb').removeAttribute("disabled");
      }, animations.length * animationSpeed)

    }

  }

  // NOTE: This method will only work if your sorting algorithms actually return
  // the sorted arrays; if they return the animations (as they currently do), then
  // this method will be broken.
  // testSortingAlgorithms() {
  //   for (let i = 0; i < 100; i++) {
  //     const array = [];
  //     const length = randomIntFromInterval(1, 1000);
  //     for (let i = 0; i < length; i++) {
  //       array.push(randomIntFromInterval(-1000, 1000));
  //     }
  //     const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
  //     const mySortedArray = getBubbleSortAnimations(array.slice());
  //     console.log(arraysAreEqual(javaScriptSortedArray, mySortedArray));
  //   }
  // }

  render() {
    const { array } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#242424' }}>
          <a className="navbar-brand" style={{ backgroundColor: '#242424', color: 'white' }} href="#">Sorting-Visualizer</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <button id="gb" className="btn btn-dark" type="button" style={{ backgroundColor: '#242424' }} onClick={() => this.resetArray()}>Generate New Array</button>
              </li>
              <li className="nav-item">
                <button id="mb" className="btn btn-dark" style={{ backgroundColor: '#242424' }} onClick={() => this.mergeSort()}>Merge Sort</button>
              </li>
              <li className="nav-item">
                <button id="hb" className="btn btn-dark" style={{ backgroundColor: '#242424' }} onClick={() => this.countingSort()}>Counting Sort</button>
              </li>
              <li className="nav-item">
                <button id="qb" className="btn btn-dark" style={{ backgroundColor: '#242424' }} onClick={() => this.insertionSort()}>Insertion Sort</button>
              </li>
              <li className="nav-item">
                <button id="bb" className="btn btn-dark" style={{ backgroundColor: '#242424' }} onClick={() => this.BubbleSort()}>Bubble Sort</button>
              </li>
            </ul>
          </div>
        </nav>

        <div className="array-container">
          {array.map((value, idx) => (
            //let margin = value > 0? 50 : 10;
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
                //marginBottom: `${margin}px`, 
              }}></div>
          ))}
          {/* <button onClick={() => this.testSortingAlgorithms()}>
            Test Sorting Algorithms (BROKEN)
        </button> */}
        </div>
      </div>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// function resetColor() {
//   const arrayBars = document.getElementsByClassName('array-bar');
//   for (let i = 0; i < arrayBars.length; i++) {
//     arrayBars[i].style.backgroundColor = "turquoise";
//   }
// }

// function arraysAreEqual(arrayOne, arrayTwo) {
//   if (arrayOne.length !== arrayTwo.length) return false;
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// }
