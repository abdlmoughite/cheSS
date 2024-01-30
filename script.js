document.addEventListener('DOMContentLoaded', () => {
    let ro93a = null;
    const game = new Chess(); 
    const history = document.getElementById('history'); 
    let contour = 1;
    let nobatman = 'w'; 


    const robo = () => {
        const possibleMoves = game.moves();

        if (game.game_over()) {
            alert("Checkmate!");
        } else {
            const ra9am3achwa2i = Math.floor(Math.random() * possibleMoves.length);
            const move = possibleMoves[ra9am3achwa2i];
            game.move(move);
            ro93a.position(game.fen());
            recordMove(move, contour); 
            contour++; 
        }
    };

    const recordMove = (move, count) => {
        const formattedMove = count % 2 === 1 ? `${Math.ceil(count / 2)}. ${move}` : `${move} -`;
        history.textContent += formattedMove + ' ';
        history.scrollTop = history.scrollHeight; 
    };

    const onDragStart = (source, piece) => {
        return !game.game_over() && piece.search(nobatman) === 0;
    };

    const onDrop = (source, target) => {
        const move = game.move({
            from: source,
            to: target,
            promotion: 'q',
        });

        if (move === null) return 'snapback';

        window.setTimeout(robo, 250);
        recordMove(move.san, contour);
        contour++;
    };

    const onSnapEnd = () => {
        ro93a.position(game.fen());
    };

    const boardConfig = {
        showNotation: true,
        draggable: true,
        position: 'start',
        onDragStart,
        onDrop,
        onSnapEnd,
        moveSpeed: 'fast',
        snapBackSpeed: 500,
        snapSpeed: 100,
    };

    ro93a = Chessboard('ro93a', boardConfig);




    


    document.querySelector('.play-again').addEventListener('click', () => {
        game.reset();
        ro93a.start();
        history.textContent = '';
        contour = 1;
        nobatman = 'w';
    });


    document.querySelector('.flip-board').addEventListener('click', () => {
        ro93a.flip();
        robo();
        nobatman = nobatman === 'w' ? 'b' : 'w';
    });

});