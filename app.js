// Le cookie expirera dans 24h, exprimées en millisecondes !
// 1 jour = 86400000 millisecondes.

// Comment créer un cookie, je suis gentil je laisse l'exemple !
document.cookie = "theme=dark; path=/; domain=localhost; max-age=86400000; samesite=strict";
console.log(document.cookie);


/**
 * Récupère tous les cookies.
 * @returns {string[]}
 */


let result = confirm("Acceptez vous nos cookies?");
if (result === true) {
    console.log("il a accepté")
    getCookies()
} else {
    console.log("il a dit non")

}

function getCookies() {
    let cookies = document.cookie.split(';');
    return cookies.map(cookie => cookie.trim());
}

/**
 * TODO Cette fonction doit permettre de créer un nouveau cookie avec le nom et la valeur au choix !
 * @param cookieName
 * @param cookieValue
 */

function setCookie(cookieName, cookieValue) {
    // Le cookie doit être valide 2 jours et doit respecter les normes de sécurité contre les failles CSRF.
    // Votre code ici.
    document.cookie = "name=test; path=/; domain=localhost; max-age=172800000; samesite=strict;"; // 2 Jours
}


/**
 * TODO Cette fonction doit retourner la valeur du nom du cookie passé en paramètre.
 * @param cookieName
 */
function getCookie(cookieName) {
    // Votre code ici.
    let myCookie = document.cookie.split(";")
    return myCookie.map(myCookie => myCookie.trim());
}


console.log(getCookies());

// FIXME Test de setCookie()
setCookie('monCookie', 'maValeur');
console.log(getCookies());

// FIXME test de getCookie(param)
console.log(getCookie());

