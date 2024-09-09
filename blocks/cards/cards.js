export default function decorate(block) {
  const items = block.querySelectorAll(':scope > div');
  items.forEach((item) => {
    item.classList.add('card-item');
    const imageContainer = item.querySelector(':scope > div:first-child');
    const textContainer = item.querySelector(':scope > div:last-child');

    imageContainer.classList.add('card-image');
    textContainer.classList.add('card-text');

    const title = textContainer.querySelector('p:first-child');
    const description = textContainer.querySelector('p:nth-child(2)');
    const link = textContainer.querySelector('p:last-child');

    title.classList.add('card-title');
    description.classList.add('card-description');
    link.classList.add('card-link');
    link.querySelector('a').classList.add('card-link-anchor');
  });
}
