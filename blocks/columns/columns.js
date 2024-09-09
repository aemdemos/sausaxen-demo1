export default function decorate(block) {
  // Adding classes to the main column div
  block.classList.add('columns');

  const columnDivs = block.querySelectorAll('.columns > div');

  // Adding classes to first column div and its child divs
  columnDivs[0].classList.add('column-1');
  const column1Divs = columnDivs[0].querySelectorAll('div');
  column1Divs[0].classList.add('content');
  column1Divs[1].classList.add('image');

  // Adding classes to second column div and its child divs
  columnDivs[1].classList.add('column-2');
  const column2Divs = columnDivs[1].querySelectorAll('div');
  column2Divs[0].classList.add('image');
  column2Divs[1].classList.add('content');
}
