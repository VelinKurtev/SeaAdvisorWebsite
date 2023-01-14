function main() {
    let nav = document.getElementById('navList');
    let home = document.getElementById('home-content');
    let nessebarPage = document.getElementById('nessebar-content');
    let pomoriePage = document.getElementById('pomorie-content');
    let sozopolPage = document.getElementById('sozopol-content');

    for (let index = 0; index < nav.children.length; index++) {
        let child = nav.children[index];
        child.addEventListener('click', () => {
            switch (child.innerHTML) {
                case "Home":
                    home.style.display = 'flex';
                    nessebarPage.style.display = 'none';
                    pomoriePage.style.display = 'none';
                    sozopolPage.style.display = 'none';
                    break;
                case "Nessebar":
                    home.style.display = 'none';
                    nessebarPage.style.display = 'flex';
                    pomoriePage.style.display = 'none';
                    sozopolPage.style.display = 'none';
                    break;
                case "Pomorie":
                    home.style.display = 'none';
                    nessebarPage.style.display = 'none';
                    pomoriePage.style.display = 'flex';
                    sozopolPage.style.display = 'none';
                    break;
                case "Sozopol":
                    home.style.display = 'none';
                    nessebarPage.style.display = 'none';
                    pomoriePage.style.display = 'none';
                    sozopolPage.style.display = 'flex';
                    break;
            }
        });
    }
}



