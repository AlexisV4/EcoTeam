package com.example.EcoTeam.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="puntos_recoleccion")
public class PuntoRecoleccion {
    @Id
    private int id;
    
    private String nombre;
    private String direccion;
    private float latitud;
    private float longitud;
    private String horarios;
    private String contacto;

    public PuntoRecoleccion() {
    }

    public PuntoRecoleccion(int id, String nombre, String direccion, float latitud, float longitud, String horarios, String contacto) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.latitud = latitud;
        this.longitud = longitud;
        this.horarios = horarios;
        this.contacto = contacto;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDireccion() {
        return this.direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public float getLatitud() {
        return this.latitud;
    }

    public void setLatitud(float latitud) {
        this.latitud = latitud;
    }

    public float getLongitud() {
        return this.longitud;
    }

    public void setLongitud(float longitud) {
        this.longitud = longitud;
    }

    public String getHorarios() {
        return this.horarios;
    }

    public void setHorarios(String horarios) {
        this.horarios = horarios;
    }

    public String getContacto() {
        return this.contacto;
    }

    public void setContacto(String contacto) {
        this.contacto = contacto;
    }

}
