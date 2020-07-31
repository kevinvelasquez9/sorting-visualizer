async function insertionSort() {
    console.log('ho')
    for (let i = 1; i < numBars; i++) {
        const key = bars[i];
        const keyHeight = parseInt(bars[i].style.height.slice(0, -1));
        let j = i - 1;
        while(j >= 0 && keyHeight < parseInt(bars[j].style.height.slice(0, -1))) {
            await new Promise(r => setTimeout(r, 50));
            bars[j + 1] = bars[j];
            j = j - 1;
        }
        bars[j + 1] = key;
        display();
    }
    sortButtons.forEach((button) => {
        button.classList.remove("active");
    });
    isSorting = false;
}