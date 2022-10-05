package com.empmanagement.empmanagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
//when never required  not Existing database rest api will trow this exception
@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class ResourseNotFoundException  extends RuntimeException{
	private static final long  serialversionUID=1L;

	public ResourseNotFoundException(String massage) {
		super(massage);
	}

}
