package conexao;

import java.sql.Connection;
import java.sql.DriverManager;

public class Conexao {
	String url = "jdbc:mysql://dbresily.c6zmfmlq2vdq.us-east-1.rds.amazonaws.com:3306?serverTimesone=UTC";
	String user = "admin";
	String passWord = "A123456789";
	
	
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
