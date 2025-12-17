<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-compatible" content="IE-edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="style.css">
    <title>Login</title>
</head>
<body>

<main class="login-container">

    <section class="login-card">
        <header class="login-header">
            <h2>Login</h2>
            <p>Enter your credentials</p>
        </header>

        <form class="login-form" action="#" method="post">
             <div class="login-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Enter your username" required>
             </div>

              <div class="form-group">
                <label for="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Enter your password" 
                    required
                >
            </div>

            <div claas="form-options">
                <a href="#" class="forgot-passaword">Forgot your password?</a>
            </div>

            <button type="submit" class="login-btn">Login</button>
        </form>
    </section>

</main>

</body>
</html>
