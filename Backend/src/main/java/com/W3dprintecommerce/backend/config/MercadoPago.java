package com.W3dprintecommerce.backend.config;

import com.mercadopago.MercadoPagoConfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MercadoPago {

    public MercadoPago(@Value("${MP_ACCESS_TOKEN}") String accessToken) {
        MercadoPagoConfig.setAccessToken(accessToken);
    }
}
