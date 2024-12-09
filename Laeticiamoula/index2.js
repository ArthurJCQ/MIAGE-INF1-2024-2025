<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Faits amusants sur les chats</title>
    <style>
        /* Réinitialisation de base pour éviter des styles par défaut gênants */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background-color: #f7f7f7;
            color: #333;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            padding: 30px;
            max-width: 600px;
            width: 100%;
            text-align: center;
        }

        h1 {
            font-size: 2rem;
            margin-bottom: 20px;
            color: #6a1b9a;
        }

        ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            text-align: left;
            font-size: 1.1rem;
            margin-top: 20px;
        }

        ul li {
            background-color: #f1f1f1;
            margin: 8px 0;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s ease;
        }

        ul li:hover {
            background-color: #e0f7fa;
        }

        button {
            padding: 10px 20px;
            font-size: 1rem;
            color: white;
            background-color: #6a1b9a;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-top: 20px;
        }

        button:hover {
            background-color: #9c4dcc;
        }

        button:focus {
            outline: none;
        }
    </style>
</head>

<body>
<div class="container">
    <h1>Faits amusants sur les chats</h1>
    <ul id="fact-list"></ul>
    <button id="refresh-btn">Rafraîchir</button>
</div>

<!-- Lien vers le fichier JavaScript -->
<script src="index.js"></script>
</body>

</html>