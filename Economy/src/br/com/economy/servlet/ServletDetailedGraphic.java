package br.com.economy.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.com.economy.DAO.TransactionDAO;

public class ServletDetailedGraphic extends HttpServlet {
	private static final long serialVersionUID = 1L;
       private TransactionDAO DAO =  new TransactionDAO();
    
    public ServletDetailedGraphic() {
        super();
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
		PrintWriter out = response.getWriter();
		
		Date dateEnd = new Date();
		Date dateStart = new Date();
		String subcategory = "";
		
		////  get user
		Cookie cookies[] = request.getCookies();
		int userId=0;
		if (cookies != null)
		{
			for(Cookie cookie : cookies){
			    if("userId".equals(cookie.getName())){
			        userId = Integer.parseInt(cookie.getValue());
			    }
			}
		}
		
		subcategory = request.getParameter("subcategory");
		long ds =Long.parseLong(request.getParameter("dateStart"));
		dateStart.setTime(ds);
		long de = Long.parseLong(request.getParameter("dateEnd"));
		dateEnd.setTime(de);
		
		
		String json = DAO.getDataForDetailedGraphic(dateStart, dateEnd, subcategory, userId);
		out.write(json);
	}

}
