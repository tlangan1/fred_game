import game_nodes from treasure

function showTreasure() {
    var treasure = document.getElementById('treasure');

    if len(treasure) == 0:
        document.createElement('li').innerHTML = 'No treasure yet'
    return

    for t in treasure:
        window.addstr(t + '\n')

    window.addstr('***************************')
    return
}