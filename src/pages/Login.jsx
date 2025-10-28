export default function Login(){
    return(
        <main>
            <div className="login-container">
                <h1>Iniciar sesion</h1>

                <form >
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" placeholder="tu@email.com" />
                    </div>

                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input id="password" name="password" type="password" placeholder="••••••••" />
                    </div>
                    <button type="submit">Ingresar</button>

                </form>
            </div>
        </main>

    )
}