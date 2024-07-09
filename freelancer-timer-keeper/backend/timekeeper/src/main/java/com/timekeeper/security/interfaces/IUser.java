package com.timekeeper.security.interfaces;


import com.timekeeper.security.model.User;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Primary
public interface IUser {

	List<User> getUsers();

	void deleteUser(long userId);

	User getUserByUserId(long userId);

	User getUserByUserName(String userName);

	User updateUser(long userId, User updatedUser);
}
