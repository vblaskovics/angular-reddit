export class Article {
    title: string;
    link: string;
    votes: number;
    description: string;
    alive: boolean;

    constructor(title: string, link: string, votes?: number, description?: string){
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
        this.description = description || '';
        this.alive = true;
    }

    voteUp(): void {
        this.votes += 1;
    }

    voteDown(): void {
        this.votes -= 1;
    }

    domain(): string {
        try {
            const domainAndPath = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }

    deleteArticle(): void {
        this.alive = false;
    }
}