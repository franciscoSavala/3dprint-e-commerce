package com.W3dprintecommerce.backend.controller;

import com.W3dprintecommerce.backend.controller.request.CreateOrderRequest;
import com.W3dprintecommerce.backend.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {

    private OrderService orderService;

    @PostMapping("/orders")
    public ResponseEntity<Void> createOrder(@RequestBody CreateOrderRequest orderRequest) {
        orderService.createOrder(orderRequest);

        return ResponseEntity.ok().build();
    }
}
