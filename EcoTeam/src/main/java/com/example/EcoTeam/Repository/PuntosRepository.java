package com.example.EcoTeam.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.EcoTeam.Model.PuntoRecoleccion;

public interface PuntosRepository extends JpaRepository <PuntoRecoleccion, Integer> {

}

