class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard("おたき");
console.log(myVisaCard.owner);
console.log(myVisaCard);
