type VotationOption = {
  numeroOfVotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numeroOfVotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numeroOfVotes);
      }
      console.log('########');
      console.log('');
    }
  }
}

const votation1 = new Votation('Qual a sua linguagem de programação favorita?');
votation1.addVotationOption({ option: 'Python', numeroOfVotes: 0 });
votation1.addVotationOption({ option: 'Java', numeroOfVotes: 0 });
votation1.addVotationOption({ option: 'Javascript', numeroOfVotes: 0 });
votation1.addVotationOption({ option: 'Typescript', numeroOfVotes: 0 });
votation1.vote(0);
votation1.vote(1);
votation1.vote(1);
votation1.vote(1);
votation1.vote(3);
votation1.vote(3);
votation1.vote(2);
votation1.vote(2);

const votation2 = new Votation('Qual a sua cor favorita?');
votation2.addVotationOption({ option: 'Amarelo', numeroOfVotes: 0 });
votation2.addVotationOption({ option: 'Azul', numeroOfVotes: 0 });
votation2.addVotationOption({ option: 'Verde', numeroOfVotes: 0 });
votation2.addVotationOption({ option: 'Vermelho', numeroOfVotes: 0 });
votation2.vote(3);
votation2.vote(3);
votation2.vote(1);
votation2.vote(0);
votation2.vote(3);
votation2.vote(1);
votation2.vote(0);
votation2.vote(2);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);
votationApp.showVotations();
