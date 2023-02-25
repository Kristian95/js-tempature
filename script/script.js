async function getTempatures() {
	let url = 'data/data.json';
	try {
        let result = await fetch(url);
        return await result.json();
	} catch (error) {
        console.log(error);
	}
}

async function renderData() {
	let tempatures = await getTempatures();

	let li = `<tr><th>Location Name</th></tr>`;

	Object.entries(tempatures).forEach((regulation) => {
        li += `<tr>
            <td>${regulation[0]} </td>
            </tr>`;
    });

    document.getElementById("tempatures").innerHTML = li;
}

renderData();
