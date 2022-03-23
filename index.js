function openTab(e, tabId) {
    const tabs = document.getElementsByClassName('tab')

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none'
    }

    const tablinks = document.getElementsByClassName('tab-link')

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "")
    }

    document.getElementById(tabId).style.display = "block"
    e.currentTarget.className += " active"
}