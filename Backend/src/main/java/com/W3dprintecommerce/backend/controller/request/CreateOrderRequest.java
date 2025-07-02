package com.W3dprintecommerce.backend.controller.request;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.List;

@Getter
@Setter
public class CreateOrderRequest {
    private List<OrderItem> items;

    public record OrderItem(Long id, String name, BigDecimal price, String image, Integer quantity) {}
}
