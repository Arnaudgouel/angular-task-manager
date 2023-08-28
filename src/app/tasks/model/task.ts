class Task {
    titre: string;
    description: string;
    status: Status;
    createdAt: Date;
    constructor(titre: string, description: string, status: Status) {
        this.titre = titre;
        this.description = description;
        this.status = status;
        this.createdAt = new Date();
    }
}

enum Status {
  "EN_COURS" = "En cours",
  "A_FAIRE" = "A faire",
  "TERMINEE" = "Terminée"
}

export { Task, Status };