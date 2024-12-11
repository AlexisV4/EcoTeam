package com.example.EcoTeam.Controller;

import com.example.EcoTeam.Model.PuntoRecoleccion;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    @PutMapping("/{id}")
    public ResponseEntity<PuntoRecoleccion> actualizarPunto(@PathVariable int id, @RequestBody PuntoRecoleccion puntoRecoleccion) {
        PuntoRecoleccion puntoExistente = puntoService.buscarPuntoPorId(id);
        if (puntoExistente != null) {
            if (puntoRecoleccion.getNombre() != null) {
                puntoExistente.setNombre(puntoRecoleccion.getNombre());
            }
            if (puntoRecoleccion.getDireccion() != null) {
                puntoExistente.setDireccion(puntoRecoleccion.getDireccion());
            }
            if (puntoRecoleccion.getLatitud() != null) {
                puntoExistente.setLatitud(puntoRecoleccion.getLatitud());
            }
            if (puntoRecoleccion.getLongitud() != null) {
                puntoExistente.setLongitud(puntoRecoleccion.getLongitud());
            }
            if (puntoRecoleccion.getContacto() != null) {
                puntoExistente.setContacto(puntoRecoleccion.getContacto());
            }
            if (puntoRecoleccion.getHorarios() != null) {
                puntoExistente.setHorarios(puntoRecoleccion.getHorarios());
            }
            PuntoRecoleccion puntoActualizado = puntoService.actualizarPunto(puntoExistente);
            return new ResponseEntity<>(puntoActualizado, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarPunto(@PathVariable int id) {
        try {
            puntoService.eliminarPunto(id);
            return new ResponseEntity<>("Punto de recolección eliminado", HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND); // Respuesta 404 si no existe
        } catch (Exception e) {
            return new ResponseEntity<>("Error interno al eliminar el punto", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
