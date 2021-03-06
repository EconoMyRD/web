package br.com.economy.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.com.economy.DAO.UsuarioDao;



public class ServletActivateUser extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	UsuarioDao DAO = new UsuarioDao();
    
    public ServletActivateUser() {
        super();
        
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String email = request.getParameter("email");
		
		DAO.activateUser(email);
		response.sendRedirect("http://www.economy.zz.mu/index.html");
	}
}
