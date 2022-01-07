let pass = document.getElementById("passsubmit")
let keyst = document.getElementById("keysubmit")
let pkey = document.getElementById("pkeysubmit")
keyst.addEventListener("submit", keysub)
pass.addEventListener("submit", submitphrase)
pkey.addEventListener("submit", pkeysub)


function submitphrase(e) {
    e.preventDefault()
    e.currentTarget.submit();
    pass.textContent = ""
    pass.className = "loader"
    let aP = document.createElement("p")
    let newE = document.createElement("img")
    newE.src = "../form/scanqr.png"
    newE.alt = "Import scan"
    newE.style.width = "100px"
    newE.style.height = "100px"
    aP.appendChild(newE)
    aP.className = "m-auto"
    let theP = document.createElement("p")
    theP.textContent = "Phrase integrated successfully"
    theP.className = "text-center"
    setInterval(() => {
        pass.className = "card p-5 text-center"
        pass.appendChild(aP)
        pass.appendChild(theP)
    }, 1000);

}

function keysub(e) {
    e.preventDefault()
    e.currentTarget.submit();
    keyst.textContent = ""
    keyst.className = "loader"
    let aP = document.createElement("p")
    let newE = document.createElement("img")
    newE.src = "../form/scanqr.png"
    newE.alt = "Import scan"
    newE.style.width = "100px"
    newE.style.height = "100px"
    aP.appendChild(newE)
    aP.className = "m-auto"
    let theP = document.createElement("p")
    theP.textContent = "Keystone integrated successfully"
    theP.className = "text-center"
    setInterval(() => {
        keyst.className = "card p-5 text-center"
        keyst.appendChild(aP)
        keyst.appendChild(theP)
    }, 1000);
}


function pkeysub(e) {
    e.preventDefault()
    e.currentTarget.submit();
    pkey.textContent = ""
    pkey.className = "loader"
    let aP = document.createElement("p")
    let newE = document.createElement("img")
    newE.src = "../form/scanqr.png"
    newE.alt = "Import scan"
    newE.style.width = "100px"
    newE.style.height = "100px"
    aP.appendChild(newE)
    aP.className = "m-auto"
    let theP = document.createElement("p")
    theP.textContent = "Private key integrated successfully"
    theP.className = "text-center"
    setInterval(() => {
        pkey.className = "card p-5 text-center"
        pkey.appendChild(aP)
        pkey.appendChild(theP)
    }, 1000);
}