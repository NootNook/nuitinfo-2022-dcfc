using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

public class ControlFire : MonoBehaviour
{

    public ParticleSystem particles;
    private Camera camera;
    private Vector3 mouse_position;
    public GameObject bulletModel;
    public float cooldown;
    private float last_fire;

    void Start()
    {
        this.camera = GameObject.FindGameObjectWithTag("MainCamera").GetComponent<Camera>();
    }

    void OnAim(InputValue value){

        this.mouse_position = camera.ScreenToWorldPoint(value.Get<Vector2>());
        print(transform.position);
    }

    void OnShoot(InputValue value){
        print("test");
        if(value.isPressed && (Time.time - this.last_fire > this.cooldown))
        {
            this.last_fire = Time.time;
            particles.Play();
            Vector3 direction = mouse_position - transform.position;
            float rot = Mathf.Atan2(direction.y,direction.x) * Mathf.Rad2Deg;
            GameObject bul = Instantiate(bulletModel, this.transform.position, Quaternion.Euler(0, 0, rot));
            bul.GetComponent<Rigidbody2D>().velocity = direction *10;
        }
    }

    void FixedUpdate()
    {
        Vector3 direction = mouse_position - transform.position;
        float rot = Mathf.Atan2(direction.y,direction.x) * Mathf.Rad2Deg;
        transform.rotation = Quaternion.Euler(0, 0, rot);
    }


}
