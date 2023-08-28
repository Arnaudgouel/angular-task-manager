class Task {
    titre: string;
    description: string;
    status: Status;
    constructor(titre: string, description: string, status: Status) {
        this.titre = titre;
        this.description = description;
        this.status = status;
    }
}

enum Status {
  "EN_COURS" = "En cours",
  "A_FAIRE" = "A faire",
  "TERMINEE" = "Terminée"
}

export { Task, Status };