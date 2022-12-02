using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SaveScript : MonoBehaviour
{
    SpriteRenderer sprite;
    // Start is called before the first frame update
    void Start()
    {
        this.sprite = GetComponent<SpriteRenderer>();
    }



    // Update is called once per frame
    void Update()
    {

    }

    void OnTriggerEnter2D(Collider2D col)
    {
        col.gameObject.GetComponent<ControlPlayer>().SavePoint.transform.position = transform.position;
        this.sprite.color = new Color (1, 1, 1, 1);

    }
}
