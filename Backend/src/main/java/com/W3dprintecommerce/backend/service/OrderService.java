package com.W3dprintecommerce.backend.service;

import com.W3dprintecommerce.backend.controller.request.CreateOrderRequest;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    public OrderService() {}


    public void createOrder(CreateOrderRequest orderRequest) {
        System.out.println(orderRequest);
    }
}
