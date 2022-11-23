import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    class Felhasznalo {
      name: String;
      nem: String;
      dateOfBirth: String;
      balance: Number;
      activity: String;

      constructor(name: string, nem: string, dateOfbirth: string, balance: number, activity: string) {
        this.name = name;
        this.nem = nem;
        this.dateOfBirth = dateOfbirth;
        this.balance = balance;
        this.activity = activity;
      }
    }

    var ember1 = new Felhasznalo("Gipsz Jakab", "férfi", "1980.04.12", 30000, "active");
    var ember2 = new Felhasznalo("Nagy Sarolta", "nő", "2004.01.12", 50000, "inactive");
    var ember3 = new Felhasznalo("Áron Márton", "férfi", "1992.05.10", 240000, "active");
    var ember4 = new Felhasznalo("Lépcső Ferenc", "férfi", "1993.05.1", 30000, "inactive");
    var ember5 = new Felhasznalo("Kis Gizi", "nő", "2000.10.19", 400000, "active");
    var ember6 = new Felhasznalo("Kovács István", "férfi", "1989.01.01", 20000, "active");
    return { ember1, ember2, ember3, ember4, ember5, ember6 };
  }
}
