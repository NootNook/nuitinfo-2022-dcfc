using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

public class BulletDestroy : MonoBehaviour
{
    private int bounces = 0;
    public float lifetime = 5;
    private float start;
    void Start()
    {
        this.start = Time.time;
    }

    void Update(){
        if (Time.time - this.start > this.lifetime){
            Destroy(gameObject);
        }

    }

    void OnCollisionEnter2D(){
        if (this.bounces > 10){
            Destroy(gameObject);
        }
        else if (this.bounces <=10){
            this.bounces +=1;
        }
    }

    void OnBecameInvisible(){
        Destroy(gameObject);
    }



}
