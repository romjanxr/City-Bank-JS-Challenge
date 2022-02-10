const cardDistribution = persons => {
  let output = [];
  persons.forEach((p, i) => {
    let gift;
    const districtPart = p.district.slice(0, 2).toUpperCase();
    const yearPart = p.currentYear.toString().substr(-2);
    const postPart = p.postNo.toString().slice(0, 2);
    const birthPart = p.birthYear.toString();
    const serialNumber = (i + 1).toString().padStart(6, "0");
    const cardNumber = districtPart.concat(
      yearPart,
      postPart,
      birthPart,
      serialNumber
    );
    if (cardNumber.substr(-1) % 2 === 0) {
      gift = "R";
    } else {
      gift = "W";
    }
    const giftObj = {
      cardNumber: cardNumber,
      gift: gift,
      priority: p.priority,
    };
    output.push(giftObj);
  });
  const prioritySorting = output.sort((a, b) =>
    a.priority > b.priority ? 1 : a.priority < b.priority ? -1 : 0
  );
  return prioritySorting;
};

cardDistribution([
  {
    name: "Mr Rashed",
    birthYear: 1999,
    currentYear: 2022,
    district: "Dhaka",
    postNo: 1200,
    priority: 2,
  },

  {
    name: "Mr Raju",
    birthYear: 1995,
    currentYear: 2022,
    district: "Rajshahi",
    postNo: 1211,
    priority: 1,
  },
]);
