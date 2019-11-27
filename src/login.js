import React from 'react';
import './Login.css';

class Login extends React.Component {
    state = {
        nameUser: "padrao",
        namePassword:"1234",
      };
      
   constructor(props) {
       super(props);
      
      this.userChange = this.userChange.bind(this);
      this.passwordChange = this.passwordChange.bind(this);
      this.loginSubmit = this.loginSubmit.bind(this);
    
   }
    valid_user(str) {
        if(str.length<8) {
            alert("Minimo de Usuario: 8 caracteres.");
            return null;
        }
        return str;
    }

    valid_password(str) {
        var strongRegex = new RegExp("^[a-zA-Z0-9]{8,12}$");
        if(!strongRegex.test(str)) {
            alert("Erro de Password.");
            return null;
        }
        return str;
    }

    loginSubmit(e) {

        if(this.valid_user(this.state.nameUser)) {
            this.getName(); 
        }
        if(this.valid_password(this.state.namePassword)) {
            this.getPassword();
        }
        e.preventDefault();
        }; 

    
    userChange(e) {
        this.setState({nameUser: e.target.value});
    }

    passwordChange(e) {
        this.setState({namePassword: e.target.value});
    }

    getName() {
        document.getElementById("iduser").innerHTML = this.state.nameUser;
    }

    getPassword() {
        document.getElementById("idpassword").innerHTML = this.state.namePassword;
    }

    render() {
        
        return (
            
            <form onSubmit={this.loginSubmit}> 
            <table className="login">
                <tr><th>Original</th></tr>
                <tr>
                    <td>Usuario:<a id="iduser">padrao</a></td>
                </tr>
                <tr>
                    <td>Password:<a id="idpassword">1234</a></td>
                </tr>
            </table>
            <table className="login">
            <tr><th>para Alterar:</th></tr>
            <tr>
              <td>Usuario: <input name="user" type="text"   onChange={this.userChange} ></input></td>
            </tr>
            <tr>
              <td>Senha: <input name="password" type="password"  onChange={this.passwordChange} ></input></td>
            </tr>
            
          </table>
          <input className="formalbutton" type="submit" value="Alterar" />
 </form> 
        )
       
    }
    
}

export default Login;