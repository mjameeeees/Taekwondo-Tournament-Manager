<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite('resources/css/app.css')
    <title>Document</title>
</head>

<body>
    <div class="p">Data</div>
    <div class="w-full">
        @if (@session('success'))
            <div class="display">{{ session('success') }}</div>
        @endif

        <div>
            <p>Student Info</p>
            <form action="{{ route('players.store') }}" method="POST">
                @csrf
                <input type="number" name="fighterid" placeholder="Fighter ID" required>
                <input type="text" name="name" placeholder="Name" required>
                <input type="number" name="age" placeholder="Age" required>
                <input type="date" name="bday" placeholder="Birthday" required>
                <input type="number" step="0.01" name="weight" placeholder="Weight" required>
                <input type="number" step="0.01" name="height" placeholder="Height" required>
                <input type="text" name="competition" placeholder="Competition" required>
                <input type="text" name="level" placeholder="Level" required>
                <input type="text" name="category" placeholder="Category" required>
                <input type="text" name="belt" placeholder="Belt" required>
                <input type="text" name="chapter" placeholder="Chapter" required>
                <input type="text" name="instructor" placeholder="Instructor" required>
                <input type="text" name="division" placeholder="Division" required>
                <input type="text" name="gender" placeholder="Gender" required>
                <button type="submit">Submit</button>
            </form>
        </div>
            <hr/>
        <div>
            <p>Tournament Info</p>
            <form action="{{ route('tournamentKyorugi.store') }}" method="POST">
                @csrf
                <input type="number" name="fight_id" placeholder="Fight ID" required>
                <input type="number" name="fighterid" placeholder="Fighter ID" required>
                <input type="text" name="name" placeholder="Name" required>
                <input type="text" name="abrv" placeholder="Abbreviation" required>
                <input type="number"  name="firstgame" placeholder="First Game" required>
                <input type="number"  name="secondgame" placeholder="Second Game" required>
                <input type="number"  name="thirdgame" placeholder="Third Game" required>
                <input type="number"  name="overall" placeholder="Overall" required>
                <input type="text" name="status" placeholder="Status" required>
                <button type="submit">Submit</button>
            </form>
        </div>
        <hr/>
        <div>
            <p>Tournament Info</p>
            <form action="{{ route('tournamentPoomsae.store') }}" method="POST">
                @csrf
                <input type="number" name="fight_id" placeholder="Fight ID" required>
                <input type="number" name="fighterid" placeholder="Fighter ID" required>
                <input type="text" name="name" placeholder="Name" required>
                <input type="text" name="abrv" placeholder="Abbreviation" required>
                <input type="number"  name="score" placeholder="Score" required>
                <input type="text" name="status" placeholder="Status" required>
                <button type="submit">Submit</button>
            </form>
        </div>
        <hr/>
        <div >
            <p>Medal Tally Info</p>
            <form action="{{ route('medalTally.store') }}" method="POST">
                @csrf
                <input type="text" name="chapter" placeholder="Team" required>
                <input type="number" name="bronze" placeholder="Bronze" required>
                <input type="number" name="silver" placeholder="Silver" required>
                <input type="number" name="gold" placeholder="Gold" required>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
</body>

</html>
