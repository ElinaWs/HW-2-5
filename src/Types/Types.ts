export interface Film {
    id: number,
    title: string,
    watched: boolean,
    reaction: "like" | "dislike" | null
}
