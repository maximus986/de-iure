# Opis zadatka

Treba napraviti izgled Aktivacione stranice koja ima sledeci prikaz:

![Prikaz desktop](/src/resources/template-preview.png?raw=true)

![Prikaz mobile](/src/resources/template-mobile.png?raw=true)

1. Neophodno je instlairti react router
2. Napraviti izgled stranice po datom dizajnu
   1. Voditi racuna o responsive-u i prelomnim tackama za mobilni prikaz
   2. Dizajn treba ispratiti odokativno, ne mora pixel perfect ali mora da lici na dati dizajn
3. \_Stranica za aktivaciju treba da se nalazi na ruti "/activate"
   1. Stranica /activate moze primiti opcionalno parametar "code", primer: /activate?code=123456
   2. U slucaju da se parametar code nalazi , treba preponuti polja sa datim kodom i automatski submitovati formu
4. Prvo polje za broj treba da bude u autofokusu kad se otvori stranica
5. Polja za unos ne smeju da primaju nista osim broja
6. Validacija i UI:
   1. Polje moze primiti samo 1 karakter (broj)
   2. Nakon unosa karaktera automatski se fokusira naredno polje
   3. Ako korisnik ne unese ispravan karakter ne treba ga fokusirati na sledece polje
   4. Ako korisnik pretisne "Backspace" brisemo taj karakter ako postoji karakter
      1. Ako ne postoji vracamo ga na prethodni input i preselektujemo tekst u tom inputu kako bi se lako izmenio taj karakter u prethodnom inputu
   5. Tab ide na naredno polje i preselektuje dati tekst da moze lako da se izmeni
   6. Focus na input ako je popunjen treba da preselektuje njegov tekst kako bi mogao lako da se izmeni
   7. Ne moze se submitovati dok nema tacno 6 cifara unetih
7. Obavezna je upotreba Typescript-a
8. Submit forme console loguje rezultat u sledecem obliku (primer)

```
{ code: "123456"}
```

Prilikom implementacije plus je koristiti Mui (material), styled-components iii emotion.

Za start je koristen create-react-app , startna dokumentacija se nalazi ispod.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
