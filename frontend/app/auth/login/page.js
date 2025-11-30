import styles from './login.module.css';

export default function Login() {
  return (
    <div className={styles.login}>
        <div className="container mt-3">
            <h2>Login</h2>
            <form className="row g-3" method="POST" action="/login">
                <div className="col-md-12">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input type="email" className="form-control" id="email" required />
                </div>
                <div className="col-md-12">
                    <label htmlFor="password" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="password" required />
                </div>
                <div className="col-md-12">
                    <button type="submit" className="btn btn-primary">Entrar</button>
                    <a href="/auth/signup" className="btn btn-secondary">Cadastrar</a>
                </div>
            </form>
        </div>
    </div>
  );
}
