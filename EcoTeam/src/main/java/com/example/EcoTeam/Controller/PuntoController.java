package com.example.EcoTeam.Controller;

import com.example.EcoTeam.Model.PuntoRecoleccion;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.EcoTeam.Service.PuntoService;

@RestController
@RequestMapping("/api/puntos_recoleccion")
public class PuntoController {
    @Autowired
    PuntoService puntoService;

    @GetMapping
    public ResponseEntity<List<PuntoRecoleccion>> findAllPuntos(){
        try {
            List<PuntoRecoleccion> puntosRecoleccion = puntoService.findAllPuntos();
            return new ResponseEntity<>(puntosRecoleccion, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping
    public ResponseEntity<PuntoRecoleccion> registrarPunto(@RequestBody PuntoRecoleccion puntoRecoleccion){
        try {
            PuntoRecoleccion nuevoPuntoRecoleccion = puntoService.guardarPunto(puntoRecoleccion);
            return new ResponseEntity<>(nuevoPuntoRecoleccion, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
