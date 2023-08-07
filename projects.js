import projectsData from './data.js';
import Popup from './popup.js';

const Article = (project, index) => {
  const mainDiv = document.createElement('div');
  mainDiv.className = 'project';

  const img = document.createElement('img');
  img.className = 'project-img';
  img.setAttribute('src', project.img);
  mainDiv.appendChild(img);

  const div = document.createElement('div');
  div.className = 'about-project';
  mainDiv.appendChild(div);

  if (index % 2 === 1) {
    div.classList.add('project-reverse');
  }

  const h2 = document.createElement('h2');
  h2.innerText = project.name;
  h2.className = 'project-name';
  div.appendChild(h2);

  const nav = document.createElement('nav');
  nav.className = 'project-nav';
  div.appendChild(nav);

  const h4 = document.createElement('h4');
  h4.innerText = project.client;
  h4.className = 'project-client';
  nav.appendChild(h4);

  const img2 = document.createElement('img');
  img2.setAttribute('src', './images/Counter.png');
  img2.className = 'counter';
  nav.appendChild(img2);

  const span = document.createElement('span');
  span.className = 'programming-language';
  span.innerText = `${project.dev}-End Dev`;
  nav.appendChild(span);

  const img3 = document.createElement('img');
  img3.setAttribute('src', './images/Counter.png');
  img3.className = 'counter';
  nav.appendChild(img3);

  const span2 = document.createElement('span');
  span2.className = 'year';
  span2.innerText = project.year;
  nav.appendChild(span2);

  const p = document.createElement('p');
  p.className = 'project-details';
  p.innerText = project.paragraph;
  div.appendChild(p);

  const ul = document.createElement('ul');
  ul.className = 'languages';
  div.appendChild(ul);

  project.technologies.forEach((technology) => {
    const li = document.createElement('li');
    li.className = 'dev-tool';
    li.innerText = technology;
    ul.appendChild(li);
  });

  const button = document.createElement('button');
  button.className = 'btn primary-btn';
  button.innerText = 'See project';
  button.addEventListener('click', () => {
    Popup(project);
  });
  div.appendChild(button);

  return mainDiv;
};

const section = document.querySelector('#portfolio');

projectsData.forEach((project, index) => {
  section.appendChild(Article(project, index));
});
