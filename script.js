fetch("events.json")
    .then((response) => response.json())
    .then((events) => {
      const list = document.querySelector("#starredAt");
      events.forEach((event) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${event.name} - Starred at ${event.starredAt}`;
        list.appendChild(listItem);
      });
    });