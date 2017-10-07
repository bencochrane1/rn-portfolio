const assert = chai.assert;
mocha.ui("bdd");
mocha.reporter("html");

describe("Example tests", () => {
	it("prove that math works", () => {
		assert.equal(5, 2+3, "math is the same")
	})

	it("found our component", () => {
		assert.isDefined(MessageBox, "message box is defined")
	})
})

describe("Doc tests", () => {
	it("page rendered empty message box", () => {
		let msgBox = document.querySelector(".messageBox");
		assert.isDefined(msgBox, "Message box is in document");
		assert.include(msgBox.classList.value, "hidden", "Message box is hidden");
		assert.equal(msgBox.innerText, "", "Message box is initially empty");
	})

	it("Rendered error when empty", () => {
		let msgBox = document.querySelector(".messageBox");
		let button = document.querySelector("#inputButton");
		button.click();
		assert.include(msgBox.classList.value, "error", "Errors shows when no name in input");
	})
})

mocha.run();