using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AiVirus : MonoBehaviour
{
    public GameObject Hero;
    public GameObject Bullet;
    public string tag = "Virus";
    public float speed;
    public float distanceBetween;
    private float distance;

    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        distance = Vector2.Distance(transform.position, Hero.transform.position);
        Vector2 direction = Hero.transform.position - transform.position;
        direction.Normalize();
        float angle = Mathf.Atan2(direction.y, direction.x) + Mathf.Rad2Deg;
      
        if(distance < 3)
        {   
            transform.position = Vector2.MoveTowards(this.transform.position, Hero.transform.position, speed*Time.deltaTime);
            transform.rotation = Quaternion.Euler(Vector3.forward * angle);
        }
    }


    void OnCollisionEnter2D(Collision2D obj)
    {
        print(obj.gameObject.tag);
        if( obj.gameObject.tag == "Bullet" ) 
        {
            Destroy(gameObject);
        }
    }
}
