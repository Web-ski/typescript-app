const title = 'Based on the Understanding Typescript course by Maximilian Schwarzmüller';

class ProjectTitle {
	templateElement: HTMLTemplateElement;
	hostElement: HTMLDivElement;
	element: HTMLHeadingElement;

	constructor() {
		this.templateElement = document.getElementById('title')! as HTMLTemplateElement;
		this.hostElement = document.getElementById('app')! as HTMLDivElement;

		const importedNode = document.importNode(this.templateElement.content, true);

		this.element = importedNode.firstElementChild as HTMLHeadingElement;
		this.attach();
	}

	private attach() {
		this.hostElement.insertAdjacentElement('afterbegin', this.element);
	}
}

class ProjectInput {
	templateElement: HTMLTemplateElement;
	hostElement: HTMLDivElement;
	element: HTMLFormElement;

	constructor() {
		this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
		this.hostElement = document.getElementById('app')! as HTMLDivElement;

		const importedNode = document.importNode(this.templateElement.content, true);

		this.element = importedNode.firstElementChild as HTMLFormElement;
		this.attach();
	}

	private attach() {
		this.hostElement.insertAdjacentElement('afterbegin', this.element);
	}
}

const prjtInput = new ProjectInput();
const prjtTitle = new ProjectTitle();