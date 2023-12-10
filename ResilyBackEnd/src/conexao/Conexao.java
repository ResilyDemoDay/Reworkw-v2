package conexao;

import java.sql.Connection;
import java.sql.DriverManager;

public class Conexao {
	String url = "jdbc:mysql:";
	String user = "";
	String passWord = "";
	
	
	public Connection getConexao() {	
		try {
			//Tentar estabelecer a conexao
			Connection conn = DriverManager.getConnection(
					url,  //linh de conexao
					user,
					passWord
					
			);
			return conn;
			
		} catch(Exception e) {
			//Se der erro na hora de conectar
		System.out.println("Erro ao conectar" + e.getMessage());
		return null;
		
		}
	
	
	}

	
	
}
