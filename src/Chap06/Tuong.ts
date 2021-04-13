class Tuong {
    name: string;
    skill: string;
    profile: string;

    constructor(name: string, skill: string, profile: string){
        this.name = name;
        this.skill = skill;
        this.profile = profile;
    }
    showInfo(): void{
        console.log(`
        Tên: ${this.name}
        Kĩ năng: ${this.skill}
        Tiểu sử: ${this.profile}`);
    }
}
export default Tuong