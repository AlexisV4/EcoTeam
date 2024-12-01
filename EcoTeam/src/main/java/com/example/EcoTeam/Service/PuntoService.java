package com.example.EcoTeam.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.EcoTeam.Model.PuntoRecoleccion;
import com.example.EcoTeam.Repository.PuntosRepository;

@Service
public class PuntoService {
    @Autowired
    PuntosRepository puntosRepository;

    public List<PuntoRecoleccion> findAllPuntos(){
        return puntosRepository.findAll();

    }

}
