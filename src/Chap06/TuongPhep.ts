import Tuong from "./Tuong";

class TuongPhep extends Tuong {
   public health: number;
   public mana: number;
   private ulti: string;
    constructor(
        name: string,
        skill: string,
        profile: string,
        health: number,
        mana: number,
        ulti: string
    ){
        super(name, skill, profile);
        this.health = health;
        this.mana = mana;
        this.ulti = ulti
    }
    showInfo(): void {
        console.log(`
        Tên: ${this.name}
        Kĩ năng: ${this.skill}
        Tiểu sử: ${this.profile}
        Máu: ${this.health}
        Mana: ${this.mana}
        Chiêu cuối: ${this.ulti}
        `);
        
    }
}
export default TuongPhep;